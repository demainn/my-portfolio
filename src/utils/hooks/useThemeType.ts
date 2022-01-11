import { useAppSelector } from 'app/hooks';
import { useAppDispatch } from 'app/hooks';
import { toggleTheme } from 'features/theme/themeSlice';

const useThemeType = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();
	return [theme, () => dispatch(toggleTheme())];
};

export default useThemeType;
