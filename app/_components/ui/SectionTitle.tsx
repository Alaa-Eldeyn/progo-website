function SectionTitle({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description?: string;
}) {
  return (
    <div className="text-center center flex-col gap-4 max-w-7xl mb-6">
      <p className="text-primary">{title}</p>
      <h1 className="text-3xl lg:text-5xl font-bold max-w-[51rem]">
        {subtitle}
      </h1>
      <h2 className="text-md lg:text-lg max-w-xl">{description}</h2>
    </div>
  );
}
export default SectionTitle;
