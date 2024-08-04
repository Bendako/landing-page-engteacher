const classesEng = [
    { description: "תיכון", icon: "🎓" },
    { description: "חטיבה", icon: "📚" },
    { description: "יסודי", icon: "🏫" },
]

const classesMath = [
    { description: "יסודי", icon: "🏫" },
    { description: "חטיבה", icon: "📚" },
]

function ClassesDetails() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen py-16 px-4">
            {/* English */}
            <div className="max-w-4xl mx-auto">
                <h2 dir='rtl' className="text-4xl text-center font-bold text-gray-800 mb-12">אנגלית כיתות:</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {classesEng.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="p-6">
                                <div className="text-5xl mb-4 text-center">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{item.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Math */}
            <div className="max-w-4xl mt-8 mx-auto">
                <h2 dir='rtl' className="text-4xl text-center font-bold text-gray-800 mb-12">מתמטיקה כיתות:</h2>
                <div dir='rtl' className="grid md:grid-cols-3 gap-8 justify-items-end">
                    {classesMath.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full">
                            <div className="p-6">
                                <div className="text-5xl mb-4 text-center">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{item.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClassesDetails