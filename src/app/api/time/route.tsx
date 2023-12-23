import { NextResponse } from "next/server";

export async function GET() {
  const finaldate = new Date("04/16/2024 12:00 AM");

  const second_t = 1000;
  const minute_t = second_t * 60;
  const hr_t = minute_t * 60;
  const day_t = hr_t * 24;

  const remaining = () => {
    const now = new Date();
    const time = finaldate.getTime() - now.getTime();
    return time;
  };

  const time = remaining();
  const response = NextResponse.json({
    days: Math.floor(time / day_t),
    hours: Math.floor((time % day_t) / hr_t),
    minutes: Math.floor((time % hr_t) / minute_t),
    seconds: Math.floor((time % minute_t) / second_t),
  });
  return response;
}
