import { DateTime } from "luxon";
import { Menu } from "../lib/Menu";

export default function Time({ iso }) {
  const date = DateTime.fromISO(iso);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <Menu />
        <div className="text-center">
          <div className="text-8xl leading-loose">Time</div>
          <div className="text-4xl leading-loose">
            {date.toFormat("dd MMM yyyy")}
          </div>
          <div className="text-2xl">{date.toFormat("HH:mm:ss.S")}</div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  const iso = DateTime.utc().toISO();

  return {
    props: { iso },
  };
}
