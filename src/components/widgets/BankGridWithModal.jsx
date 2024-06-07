import { twMerge } from 'tailwind-merge';

const BankGridWithModal = ({ items = [], columns, classes = {} }) => {
  const {
    containerClass = '',
    titleClass = '',
    descriptionClass = '',
  } = classes;

  console.log(classes);

  const handleClick = (e) => {
    console.log(e.target);
  }

  const handleKeyDown = (e) => {
    handleClick(e);
  }
  return (
    <div
      className={twMerge(
        `grid gap-8 gap-x-12 sm:gap-y-8 ${
          columns === 4
           ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
            : columns === 3
             ? 'lg:grid-cols-3 sm:grid-cols-2'
              : columns === 2
               ? 'sm:grid-cols-2 '
                : ''
        }`,
        containerClass
      )}
    >
      {items.map(({ title, description, content, classes: itemClasses = {} }, i) => (
        <div 
          key={i} 
          tabIndex="0"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="cursor-pointer relative flex flex-col rounded-lg shadow-light hover:shadow-dark backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6 duration-200" 
          content={content} >

        <div className={twMerge('text-xl font-bold', titleClass, itemClasses?.title)}>{title}</div>
          {description && (
            <p className={twMerge('text-muted mt-2', descriptionClass, itemClasses?.description)} dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
      ))}
    </div>
  );
}

export default BankGridWithModal;