import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrganizerService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.organizer.findMany();
  }

  async create(data: CreateOrganizerDto) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const organizer = await this.prisma.organizer.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });

      return {
        id: organizer.id,
        name: organizer.name,
        email: organizer.email,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('El email ya está registrado');
      }

      throw error;
    }
  }
}
