import { useState } from 'react';

const FormBody = ({ inputs, disclaimer }) => {
  const [showOtherResponseInput, setShowOtherResponseInput] = useState(false);

  const handleChange = (e) => {
    setShowOtherResponseInput(e.target.value === 'other');
  };

  return (
    <>
      {inputs?.map(({ type = 'text', name, label = '', autocomplete = 'on', placeholder = '', options = null }) => (
        name && (
          <div className={name === 'bank' || name === 'other' ? 'w-full' : 'flex-grow'} key={name}>
            {label && (
              <label htmlFor={name} className="block text-sm font-medium mb-1">
                {label}
              </label>
            )}
            {type !== 'select' ? (
              <input
                type={type}
                name={name}
                id={name}
                autoComplete={autocomplete}
                placeholder={placeholder}
                className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
              />
            ) : (
              <select
                name={name}
                id={name}
                className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
                onChange={handleChange}>
                <option value="" disabled selected>Select an option</option>
                {options?.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            )}
          </div>
        )
      ))}

      {showOtherResponseInput && (
        <div class="w-full">
          <label htmlFor="bank-other" className="block text-sm font-medium mb-1">
            Enter name of your bank
          </label>
          <input
            type="text"
            name="bank-other"
            id="bank-other"
            placeholder="Please enter the name of your bank"
            className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          />
        </div>
      )}

      {disclaimer && (
        <div className="mt-3 flex items-start">
          <div className="flex mt-0.5">
            <input
              id="disclaimer"
              name="disclaimer"
              type="checkbox"
              className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400">
              {disclaimer.label}
            </label>
          </div>
        </div>
      )}
    </>
  )
}

export default FormBody;
