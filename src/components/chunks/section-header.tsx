interface SectionHeaderProps {
  title: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SectionHeader({
  title,
  className = '',
  as: Heading = 'h2',
}: SectionHeaderProps) {
  return (
    <Heading
      className={`font-cortoba text-center text-variant text-4xl lg:text-6xl my-6 ${className}`}
    >
      {title}
    </Heading>
  );
}
