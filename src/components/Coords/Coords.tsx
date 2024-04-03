import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../../store';
import { setLatitude, setLongitude } from '../../reducers/weather';

const Coords = () => {
  const { longitude, latitude } = useSelector((state: State) => state.weather);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="flex mb-2">
      <input
        type="text"
        defaultValue={latitude}
        onBlur={(event) => dispatch(setLatitude(parseInt(event.target.value, 10)))}
        className="h-10 w-24 mr-4 pl-2 border border-blue-500 mt-1 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter latitude"
      />
      <input
        type="text"
        defaultValue={longitude}
        onBlur={(event) => dispatch(setLongitude(parseInt(event.target.value, 10)))}
        className="h-10 w-24 pl-2 border border-blue-500 mt-1 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter longitude"
      />
    </div>
  )
};

export default Coords;
