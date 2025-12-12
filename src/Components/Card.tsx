interface Props{
    Card : {
        title: string
        para: string
        src: string
    }
}


const Card = ({Card}: Props) => {
    return (
        <a
            href="#"
            className="
        backdrop-blur-xl bg-white/20
        border border-white/30
        rounded-2xl shadow-lg
        p-6 flex flex-col md:flex-row
        max-w-xl transition
        hover:bg-white/30 hover:shadow-xl
      "
        >
            <img
                className="object-cover w-full h-64 md:h-auto md:w-48 rounded-xl mb-4 md:mb-0"
                src={Card.src}
                alt=""
            />

            <div className="flex flex-col justify-between md:p-4 leading-normal">
                <h5 className="text-2xl font-semibold text-white drop-shadow-sm mb-3">
                    {Card.title}
                </h5>

                <p className="text-white/80 mb-6">
                    {Card.para}
                </p>

                <button
                    type="button"
                    className="
            inline-flex items-center px-4 py-2.5
            text-white font-medium text-sm
            bg-white/20 border border-white/40
            rounded-xl shadow
            hover:bg-white/30 backdrop-blur-lg
          "
                >
                    Read more
                    <svg
                        className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                    </svg>
                </button>
            </div>
        </a>
    );
};

export default Card;
