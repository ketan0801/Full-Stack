export default function Background({ image = '/Blue.jpg', overlay = 'rgba(8, 11, 26, 0.65)' }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${image}')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_38%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[110px]" />
    </div>
  );
}
