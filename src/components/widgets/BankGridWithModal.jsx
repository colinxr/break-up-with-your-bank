import { twMerge } from 'tailwind-merge';

const BankGridWithModal = ({ items = [], columns, classes = {} }) => {
  const {
    containerClass = '',
    titleClass = '',
    descriptionClass = '',
  } = classes;

  return (
    <div
      className={twMerge(
        `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4
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
      {items.map(({ title, description, cta, content, classes: itemClasses = {} }, i) => (
        <div
          key={i}
          className="cursor-pointer relative flex flex-col justirounded-lg shadow-light hover:shadow-dark backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6 duration-200"
          content={content} >

          <div className={twMerge('text-xl font-bold', titleClass, itemClasses?.title)}>{title}</div>
          {description && (
            <p className={twMerge('text-muted mt-2', descriptionClass, itemClasses?.description)} dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
          {
            cta && (
              <a href={cta} class="inline-flex text-white mt-5 self-start items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Read More</a>
            )
          }
        </div>
      ))}
    </div>
  );
}

export default BankGridWithModal;
