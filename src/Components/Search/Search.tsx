import React from 'react'

type Props = {
	onChange: (str: string) => void;
	placeholder: string;
	name: string;
	value?: string;
};

export default function Search({ onChange, name, placeholder, value = "" }: Props) {
  return (
    <div>

<>
			<style>
				{`
      .input {
        display: flex;
        background-color: #ffffff;
        padding: 20px;
        justify-content: center;
        text-align: center;
      }
    `}
			</style>
			<input
				className='input'
				onChange={(event) => onChange(event.target.value)}
				name={name}
				placeholder={placeholder}
				value={value}
			/>
		</>


    </div>
  )
}

