export interface ILoaderProps {
    small?: boolean;
    heavy?: boolean;
}

const Loader = ({ small, heavy }: ILoaderProps) => {
    return (
        <div className={"relative w-7 h-7" + (small ? " w-3 h-3" : "")}>
            <div className="w-7 h-7 rounded-full absolute "></div>
            <div
                className={
                    "w-7 h-7 rounded-full animate-spin absolute  border-4 border-solid  border-t-transparent" +
                    (small ? " w-3 h-3" : "") +
                    (heavy ? " border-[#4C4C66]" : " border-[#FFFFFF]")
                }
            ></div>
        </div>
    );
};
export default Loader;
