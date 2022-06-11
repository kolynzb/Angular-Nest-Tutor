import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeORMConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    // console.log('PASSSSSSSS', typeof process.env.DB_PASSWORD);
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: [],
      synchronize: false,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [],
  synchronize: false,
  logging: true,
};

// export default class TypeOrmConfig {
//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     return {
//       type: 'mysql',
//       host: configService.get('DB_HOST'),
//       port: configService.get('DB_PORT'),
//       username: configService.get('DB_USERNAME'),
//       password: configService.get('DB_PASSWORD'),
//       database: configService.get('DB_NAME'),
//       entities: [],
//       autoLoadEntities: true, // Disable in production
//       synchronize: true,
//     };
//   }
// }

// export const typeORMConfigAsync: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//   inject: [ConfigService],
// };
