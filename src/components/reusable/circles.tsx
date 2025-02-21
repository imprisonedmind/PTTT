export default function Circles() {
  return (
    <div
      className={
        "absolute top-1/2 right-1/2 md:right-0 -translate-y-1/2 h-full -translate-x-1/2"
      }
    >
      <div
        className={
          "relative h-[inherit] flex justify-center items-center opacity-0 md:opacity-100"
        }
      >
        <div
          className={"absolute h-44 w-44 scale-[5] bg-quaternary rounded-full"}
        />
        <div
          className={"absolute h-44 w-44 scale-[4] bg-tertiary rounded-full"}
        />
        <div
          className={"absolute h-44 w-44 scale-[3] bg-secondary rounded-full"}
        />
        <div
          className={"absolute h-44 w-44 scale-[2] bg-primary rounded-full"}
        />
      </div>
    </div>
  );
}
