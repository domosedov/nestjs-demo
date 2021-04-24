import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel) private reviewModel: ModelType<ReviewModel>,
  ) {}

  async create(dto: CreateReviewDto) {
    return this.reviewModel.create(dto);
  }

  async delete(id: string) {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByByProductId(productId: string) {
    return this.reviewModel
      .find({ productId: Types.ObjectId(productId) })
      .exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel
      .deleteMany({
        productId: Types.ObjectId(productId),
      })
      .exec();
  }
}
