export const Zigzag = ({className}) => {
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 150" width="850px" height="150px">
                <defs>
                    {/* Linear Gradient for Mask */}
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        {/* Invisible edges with visible center */}
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="40%" stopColor="white" stopOpacity="1" />
                        <stop offset="60%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    {/* Mask with Animated Rectangle */}
                    <mask id="gradient-mask">
                        <rect
                            className="mask-rect"
                            x="0"
                            y="0"
                            width="100%"
                            height="200"
                            fill="url(#gradient)"
                        />
                    </mask>
                </defs>

                {/* Zigzag Path with Mask */}
                <path
                    className="path"
                    d="M0 100 L100 10 L200 100 L300 10 L400 100 L500 10 L600 100 L700 10 L800 100 L900 10"
                    fill="none"
                    stroke="#00FFFF"
                    strokeWidth="8"
                    mask="url(#gradient-mask)"
                />
            </svg>
        </div>
    );
};
