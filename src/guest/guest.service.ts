import { Injectable } from '@nestjs/common';
import { CreateGuestCapsuleAccessLogDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestService {
  create(createGuestDto: CreateGuestCapsuleAccessLogDto) {
    return 'This action adds a new guest';
  }

  findAll() {
    return `This action returns all guest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guest`;
  }

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}
