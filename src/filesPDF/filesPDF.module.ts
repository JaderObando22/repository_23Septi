import { Module } from "@nestjs/common";
import { Controller } from '@nestjs/common';
import { FilesPDFController } from './controllers/filesPDF.controllers';
import { FilesPDFService } from './services/filesPDF.service';

@Module({
    controllers: [FilesPDFController],
    providers: [FilesPDFService],
})

export class FilesPDFModule {}