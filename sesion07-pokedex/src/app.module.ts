import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot(
      'mongodb+srv://root:Ad123456@devacademy.ruor6i7.mongodb.net/nest-pokemon',
    ),
    PokemonModule,
  ],
})
export class AppModule {}
