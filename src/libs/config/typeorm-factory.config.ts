import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';

/**
 * TypeOrmConfigFactory is responsible for injecting datasource type
 */
@Injectable()
export class TypeOrmConfigFactory implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions() {
    const env = this.configService.get('env');
    if (env === 'test') return this.configService.get('test_database');
    return this.configService.get('database');
  }
}
