import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { RestaurantController } from './restaurant/restaurant.controller'
import { AppService } from './app.service'
import { RestaurantService } from './restaurant/restaurant.service'

@Module({
	imports: [],
	controllers: [AppController, RestaurantController],
	providers: [AppService, RestaurantService],
})
export class AppModule {}
