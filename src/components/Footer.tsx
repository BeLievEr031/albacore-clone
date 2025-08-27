import { useEffect, useState } from "react";

export default function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // formatters
    const formatTime = (date: Date, tz: string) =>
        date.toLocaleTimeString("en-US", {
            hour12: false,
            timeZone: tz,
        });

    const formatDate = (date: Date, tz: string) =>
        date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            timeZone: tz,
        }).toUpperCase();

    return (
        <div className="w-full bg-transparent text-gray-300 px-6 py-3 mt-30 font-jetbrains">
            <div className="flex justify-between items-center">
                <div className="flex gap-12">
                    <span>{formatTime(time, "America/Los_Angeles")} PT</span>
                </div>
                <span>{formatTime(time, "America/New_York")} ET</span>
                <span>{formatDate(time, "America/Los_Angeles")}</span>
            </div>
            <hr className="border-gray-700 my-3" />
            <div className="flex justify-start">
                <span className="text-2xl font-bold">Albacore</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
                © {time.getFullYear()} ALBACORE INC. ALL RIGHTS RESERVED
            </p>
        </div>
    );
}
