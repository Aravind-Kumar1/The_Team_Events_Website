export default function Card({ title, description, children }) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300">
        {title && <h3 className="text-xl font-semibold text-gray-800">{title}</h3>}
        {description && <p className="text-gray-600 mt-2">{description}</p>}
        <div className="mt-4">{children}</div>
      </div>
    );
  }
  