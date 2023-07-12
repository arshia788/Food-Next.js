
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

export default function Companies() {
    return (
        <div className='mt-8 flex justify-around items-center'>
            <Apple />
            <SpaceX />
            <Binance />
            <Tesla />
        </div>
    )
}
