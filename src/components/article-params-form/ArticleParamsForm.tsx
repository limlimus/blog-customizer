import clsx from 'clsx';
import { useState, useRef } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Separator } from '../../ui/separator';
//import { RadioGroup } from '../../ui/radio-group';
//import { defaultArticleState } from '../../constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import { useOutsideClickClose } from '../../ui/select/hooks/useOutsideClickClose';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);
	useOutsideClickClose({
		isOpen,
		rootRef: containerRef,
		onClose: () => setIsOpen(false),
	});

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
					<div>
						<p className={styles.text}>Text</p>
						<Separator></Separator>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

//<RadioGroup selected={selected} name='radio' onChange={setSelected} options={options} title='Название радиогруппы'/>
