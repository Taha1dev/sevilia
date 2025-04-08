import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: 'سعاد ف.',
    date: 'منذ يومين',
    rating: 5,
    comment:
      'كتاب رائع جدًا! أحبته ابنتي كثيرًا واستفادت منه كثيرًا. الرسومات جميلة والمحتوى مفيد.',
  },
  {
    name: 'محمد ع.',
    date: 'منذ أسبوع',
    rating: 5,
    comment:
      'أحببنا طريقة عرض الألوان والشخصيات. ساعد طفلي على التعبير بشكل أفضل.',
  },
  {
    name: 'ليلى س.',
    date: 'منذ أسبوعين',
    rating: 5,
    comment: 'جودة الطباعة ممتازة والكتاب تفاعلي بطريقة مبتكرة. أنصح به بشدة.',
  },
];

export const ReviewsList = () => (
  <div className="space-y-4">
    {reviews.map((review, idx) => (
      <Card key={idx} className="text-start hover:shadow-md transition-shadow">
        <CardContent className="p-4 sm:p-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-muted-foreground">
            <span>{review.date}</span>
            <span className="font-medium">{review.name}</span>
          </div>
          <div className="flex justify-end gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  i < review.rating
                    ? 'fill-yellow-400 stroke-yellow-400'
                    : 'stroke-muted'
                }`}
              />
            ))}
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-foreground">
            {review.comment}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
);
