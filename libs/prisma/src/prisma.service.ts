import type { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel, DefaultArgs>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log:
        process.env.NODE_ENV === 'development'
          ? [
              { level: 'query', emit: 'event' },
              { level: 'info', emit: 'stdout' },
              { level: 'warn', emit: 'stdout' },
            ]
          : undefined,
    });
  }

  async onModuleInit() {
    await this.$connect();

    this.$on('query', (event) => {
      Logger.log(
        `${event.query} --- PARAMETERS: ${JSON.stringify(event.params, null, 2)}`,
      );
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
