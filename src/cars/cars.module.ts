import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from '@/cars/entities/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '@/common/common.module';
import { CarBrandsModule } from '@/car-brands/car-brands.module';
import { CarFilterService } from './filter/car-filter.service';
import { CarFilterController } from './filter/car-filter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Car]), CommonModule, CarBrandsModule],
  controllers: [CarsController, CarFilterController],
  providers: [CarsService, CarFilterService],
})
export class CarsModule {}
