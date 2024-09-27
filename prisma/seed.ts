import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

async function seedPuzzles() {
  for (let i = 0; i < 10000; i++) {
    try {
      await prisma.puzzle.create({
        data: {
          puzzleId: getRandomString(6),
          isActive: i === 0 ? true : false,
          week: new Date(
            Date.UTC(2024, 0, 1) + Math.random() * (365 * 24 * 60 * 60 * 1000),
          ).toISOString(),
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  console.log('Puzzles seeded');
}

async function seedUsers() {
  for (let i = 0; i < 10000; i++) {
    try {
      const user = await prisma.user.create({
        data: {
          username: 'user' + i,
          email: 'user' + i + '@example.com',
          currentStreak: Math.floor(Math.random() * 10) + 1,
          bestStreak: Math.floor(Math.random() * 10) + 1,
          totalPoints: Math.floor(Math.random() * 100) + 1,
          gamesWon: Math.floor(Math.random() * 10) + 1,
        },
        select: { id: true },
      });

      // seed user puzzle and leaderboard
      await seedLeaderboards(user.id);
      const totalPuzzles = await prisma.puzzle.count();

      const randomPuzzle = await prisma.puzzle.findFirst({
        take: 1, // Ensures you only take one item
        skip: Math.floor(Math.random() * totalPuzzles),
      });
      seedUserPuzzles(user.id, randomPuzzle.id);

      console.log('Users seeded');
    } catch (e: unknown) {
      console.log('Error seeding users');
    }
  }
}

async function seedLeaderboards(userId: string) {
  const count = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < count; i++) {
    try {
      await prisma.leaderboard.create({
        data: {
          week: new Date(
            Date.UTC(2024, 0, 1) + Math.random() * (365 * 24 * 60 * 60 * 1000),
          ).toISOString(),
          totalPoints: Math.floor(Math.random() * 1000) + 1,
          puzzlesCompleted: Math.floor(Math.random() * 100) + 1,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    } catch (e) {
      console.log('Error seeding leaderboards');
    }
  }
}

async function seedUserPuzzles(userId: string, puzzleId: string) {
  const count = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < count; i++) {
    try {
      await prisma.userPuzzle.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          puzzle: {
            connect: {
              id: puzzleId,
            },
          },
          completedAt: new Date(
            Date.UTC(2024, 0, 1) + Math.random() * (365 * 24 * 60 * 60 * 1000),
          ).toISOString(),
          totalPoints: Math.floor(Math.random() * 1000) + 1,
          totalQuestionsAnswered: Math.floor(Math.random() * 50) + 1,
        },
        select: { id: true },
      });
    } catch (e) {
      console.log('Error seeding user puzzles');
    }
  }
}

(async () => {
  for (const fn of [seedPuzzles, seedUsers]) {
    try {
      await fn();
    } catch (e) {
      console.error(e);
    }
  }
})();
