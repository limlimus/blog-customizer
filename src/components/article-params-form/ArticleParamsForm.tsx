import clsx from 'clsx';
import { useState, useRef } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Separator } from 'src/ui/separator';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import { useOutsideClickClose } from '../../ui/select/hooks/useOutsideClickClose';
import { Text } from 'src/ui/text';
export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);
	useOutsideClickClose({
		isOpen,
		rootRef: containerRef,
		onClose: () => setIsOpen(false),
	});

	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth
	);

	const toggleDisplay = () => {
		setIsOpen(!isOpen);
	};

	const containerStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleDisplay} />
			<aside ref={containerRef} className={containerStyle} id='sidebar'>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={setFontFamily}
						title='шрифт'></Select>
					<RadioGroup
						name='radioGroup'
						selected={fontSize}
						onChange={setFontSize}
						options={fontSizeOptions}
						title='размер шрифта'
					/>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}
						title='цвет шрифта'></Select>
					<Separator></Separator>
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
						title='цвет фона'></Select>
					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={setContentWidth}
						title='ширина контента'></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
//type SelectProps = {
//selected: OptionType | null;
//	options: OptionType[];
//placeholder?: string;
//	onChange?: (selected: OptionType) => void;
//onClose?: () => void;
//	title?: string;
//};
//<RadioGroup selected={selected} name='radio' onChange={setSelected} options={options} title='Название радиогруппы'/>
