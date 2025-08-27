interface Iprop {
    setOpen: React.Dispatch<boolean>
}
function Video({ setOpen }: Iprop) {
    return (
        <div
            className="absolute top-0 left-0 w-full z-20 min-h-screen bg-black/40 flex items-center justify-center p-6"
            onClick={() => setOpen(false)} // only closes when clicking backdrop
        >
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/UQ6SYgIsDQs?si=5d9QpR1HtmFVpc1S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default Video