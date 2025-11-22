import Badge from "../atoms/Badge";

export default function PosterItem({ src, title, year, badge }) {
  return (
    <div className="relative min-w-[150px] md:min-w-[220px] cursor-pointer group">
      {badge && <Badge>{badge}</Badge>}
      <img
        src={src}
        alt={title}
        className="rounded-lg w-full h-full object-cover group-hover:opacity-80 transition"
      />
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 rounded-b-lg p-2 opacity-0 group-hover:opacity-100 transition">
          <h4 className="text-sm font-semibold">{title}</h4>
          {year && <p className="text-xs opacity-70">{year}</p>}
        </div>
      )}
    </div>
  );
}
