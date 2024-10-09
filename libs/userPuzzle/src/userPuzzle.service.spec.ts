import { Test, TestingModule } from '@nestjs/testing';

import { UserPuzzleService } from './userPuzzle.service';

describe('UserPuzzleService', () => {
  let service: UserPuzzleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPuzzleService],
    }).compile();

    service = module.get<UserPuzzleService>(UserPuzzleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
