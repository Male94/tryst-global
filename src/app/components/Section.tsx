type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
};

export default function Section({ id, title, children, bg }: SectionProps) {
  return (
    <section
      id={id}
      className={`${bg ? bg : "bg-white"} max-w-6xl mx-auto py-16 px-6`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="text-gray-700 text-center">{children}</div>
    </section>
  );
}
