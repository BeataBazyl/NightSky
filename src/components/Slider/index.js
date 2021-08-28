import React from 'react';

const slides = [
    {
        title: "Panoramic View Of A Lake Under A Starry Sky",
        subtitle: "Pixabay",
        description: "Lens 24.0mm ƒ/1.8 20/1s",
        image:
            "https://images.pexels.com/photos/262669/pexels-photo-262669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Milky Way Photography",
        subtitle: "Nicole Avagliano",
        description: "Lens 18.0mm ƒ/3.5 ISO 6400",
        image:
            "https://images.pexels.com/photos/2312040/pexels-photo-2312040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Full Moon Illustration",
        subtitle: "Unknown",
        description: "Lens 129.0mm ƒ/6.3 1/160s ISO 80",
        image:
            "https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Brown Cabin Photo during Starry Nighttime",
        subtitle: "Johnatan Borba",
        description: "Lens 20.0mm ƒ/4.0 ISO 160",
        image:
            "https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Time Lapse Photography of Stars",
        subtitle: "Marek Piwnicki",
        description: "Lens 19.0mm ƒ/4.0 933.0s ISO",
        image:
            "https://images.pexels.com/photos/262750/pexels-photo-262750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Photo of Supernova in Galaxy",
        subtitle: "Alex Andrews",
        description: "Lens 400.0mm ƒ/5.6 4050.0s ISO 6400",
        image:
            "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Man in Black Jacket and Black Pants Standing on Road during Night Time",
        subtitle: "Ken Cheung",
        description: "Lens 24.0mm ƒ/1.4 15.0s ISO 3200",
        image:
            "https://images.pexels.com/photos/6258535/pexels-photo-6258535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Body of Water Near Mountain Under Starry Night",
        subtitle: "Janik Butz",
        description: "Lens unknown",
        image:
            "https://images.pexels.com/photos/5366526/pexels-photo-5366526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: "Person Standing Under A Rock Formation On A Starry Night",
        subtitle: "Pixabay",
        description: "Lens 20.0mm ƒ/2.2 25/1s ISO 2500",
        image:
            "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
];

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

function Slider() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div id="slider">
        <div className="newContainer">
        <div className="slides">
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
        </div>
        </div>
    );
}


export default Slider;