import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";


const Home = () => {
    const {count} = useSelector((state) => state.counter)
    console.log(count);
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <br />
                <span>Count : {count}</span>
                <br />
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <br />
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByValue(5))}
                >
                    increase by 5
                </button>
            </div>
        </div>
    );
};

export default Home;