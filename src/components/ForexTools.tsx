
import { Calculator, Clock, Calendar, TrendingUp, TrendingDown, ChartBar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const toolsData = [
  {
    id: 1,
    title: "Currency Strength Meter",
    description: "Track the real-time relative strength of major currencies to identify potential forex trading opportunities.",
    icon: TrendingUp,
    comingSoon: false,
    link: "https://currencystrengthmeter.org/",
    buttonText: "View Live Strength Meter"
  },
  {
    id: 2,
    title: "Forex Session Clock",
    description: "Monitor active trading sessions worldwide to optimize your trading schedule.",
    icon: Clock,
    comingSoon: false,
    link: "https://www.babypips.com/tools/forex-market-hours",
    buttonText: "View Live Forex Session Clock"
  },
  {
    id: 3,
    title: "Economic Calendar",
    description: "Track upcoming economic events that could affect the forex market. Stay ahead of high-impact news like NFP, CPI, interest rate decisions, and more.",
    icon: Calendar,
    comingSoon: false,
    link: "https://www.forexfactory.com/calendar",
    buttonText: "View Forex Factory Calendar"
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
              {tool.id === 3 && !tool.comingSoon && (
                <div className="mt-2 text-xs text-gray-500">
                  <span className="text-red-500 font-medium">Red = High Impact</span> · 
                  <span className="text-orange-500 font-medium"> Orange = Medium</span> · 
                  <span className="text-yellow-500 font-medium"> Yellow = Low</span>
                </div>
              )}
            </CardContent>
            {!tool.comingSoon && tool.link && (
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-trader-blue text-trader-blue hover:bg-trader-blue hover:text-white"
                  onClick={() => window.open(tool.link, "_blank")}
                >
                  {tool.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ForexTools;
