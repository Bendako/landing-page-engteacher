import Image from 'next/image'
import { Button } from './ui/button'

const classes = [
    { description: "תיכון", icon: "🎓" },
    { description: "חטיבה", icon: "📚" },
    { description: "יסודי", icon: "🏫" },
]

function ClassesDetails() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl text-center font-bold text-gray-800 mb-12">כיתות</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {classes.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="p-6">
                                <div className="text-5xl mb-4 text-center">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{item.description}</h3>
                                {/* <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                    פרטים נוספים
                                </Button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClassesDetails