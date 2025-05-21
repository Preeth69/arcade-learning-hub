
import { Calculator, Clock, Calendar, TrendingUp, TrendingDown, ChartBar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const toolsData = [
  {
    id: 1,
    title: "Currency Strength Meter",
    description: "Track the relative strength of major currencies in real-time to identify potential trading opportunities.",
    icon: TrendingUp,
    comingSoon: true,
  },
  {
    id: 2,
    title: "Forex Session Clock",
    description: "Monitor active trading sessions worldwide to optimize your trading schedule.",
    icon: Clock,
    comingSoon: true,
  },
  {
    id: 3,
    title: "Economic Calendar",
    description: "Stay informed about upcoming economic events that may impact the forex market.",
    icon: Calendar,
    comingSoon: true,
  },
  {
    id: 4,
    title: "ATR Calculator",
    description: "Calculate Average True Range to better understand market volatility and set appropriate stop losses.",
    icon: ChartBar,
    comingSoon: true,
  },
  {
    id: 5,
    title: "Position Size Calculator",
    description: "Determine optimal position sizes based on your risk management strategy.",
    icon: Calculator,
    comingSoon: true,
  },
  {
    id: 6,
    title: "Lot Size Converter",
    description: "Convert between standard, mini, and micro lots with ease.",
    icon: TrendingDown,
    comingSoon: true,
  },
];

const ForexTools = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center text-trader-blue">Forex Trading Tools</h2>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Access these powerful trading tools to enhance your trading strategy and decision-making.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsData.map((tool) => (
          <Card key={tool.id} className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-trader-blue/10 p-2 rounded-md">
                <tool.icon className="h-6 w-6 text-trader-blue" />
              </div>
              <div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                {tool.comingSoon && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">Coming Soon</span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{tool.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ForexTools;
