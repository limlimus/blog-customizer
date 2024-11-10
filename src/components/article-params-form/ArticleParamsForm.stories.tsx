import type { Meta, StoryObj } from '@storybook/react';

import { ArticleParamsForm } from './ArticleParamsForm';

const meta = {
	/* Название компонента и путь, по которому его нужно отобразить на витрине */
	title: 'components/ArticleParamsForm',

	/* Передаём сам компонент */
	component: ArticleParamsForm,

	/* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
	tags: ['autodocs'],

	/* satisfies помогает точнее определить тип */
} satisfies Meta<typeof ArticleParamsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
	/* Для React-компонентов args === props */
	args: {
		isOpen: true,
	},
};

export const Close: Story = {
	args: {
		isOpen: false,
	},
};
