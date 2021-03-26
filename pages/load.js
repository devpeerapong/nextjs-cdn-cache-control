import { DateTime } from "luxon";
import Link from "next/link";
import { Menu } from "../lib/Menu";

export default function Load({ iso }) {
  const date = DateTime.fromISO(iso);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="text-8xl leading-loose">Load</div>
        <Menu />
        <div className="text-center">
          <div className="text-4xl leading-loose">
            {date.toFormat("dd MMM yyyy")}
          </div>
          <div className="text-2xl">{date.toFormat("HH:mm:ss.S")}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await delay(3);
  const iso = DateTime.utc().toISO();

  return {
    props: { iso },
  };
}

function delay(seconds) {
  const millis = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, millis));
}
