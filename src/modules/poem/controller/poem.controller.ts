import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';

@Controller('poem')
@ApiTags('N행시 API')
export class PoemController {}
