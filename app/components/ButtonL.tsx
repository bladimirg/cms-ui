const ButtonL = ({loading,children, }: {children: React.ReactNode}) => {
    return (
<button
          className={`bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded ${
            loading ? "cursor-not-allowed opacity-25" : ""
          }`}
          onClick={handleClick}
          disabled={loading}
        >
          {children}  
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            
          ) : (
            "Loading Button"
          )}
        </button>
        
    );
}
export default ButtonL;