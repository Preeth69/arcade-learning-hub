
import { Calculator, Clock, Calendar, TrendingUp, TrendingDown, ChartBar, ExternalLink, Ruler, Shield, ArrowRightLeft } from "lucide-react";
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
    description: "Use the Average True Range to measure market volatility and fine-tune your stop loss placement. Ideal for gauging how much a pair typically moves.",
    icon: ChartBar,
    comingSoon: false,
    link: "https://www.myfxbook.com/forex-calculators/atr",
    buttonText: "Open ATR Calculator"
  },
  {
    id: 5,
    title: "Position Size Calculator",
    description: "Control your risk like a pro. This tool helps you calculate the exact lot size based on your account size, stop loss, and risk percentage.",
    icon: Ruler,
    comingSoon: false,
    link: "https://www.myfxbook.com/forex-calculators/position-size",
    buttonText: "Use Position Size Tool"
  },
  {
    id: 6,
    title: "Lot Size Converter",
    description: "Quickly convert between standard, mini, and micro lots to suit your strategy and account balance. Perfect for fast lot management.",
    icon: ArrowRightLeft,
    comingSoon: false,
    link: "https://www.earnforex.com/tools/position-size-calculator/",
    buttonText: "Launch Lot Size Converter"
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
              {tool.id === 4 && !tool.comingSoon && (
                <div className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">Higher ATR = More Volatility</span>
                </div>
              )}
              {tool.id === 5 && !tool.comingSoon && (
                <div className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">Never risk more than 1–2% of your capital per trade</span>
                </div>
              )}
              {tool.id === 6 && !tool.comingSoon && (
                <div className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">1 Standard = 100,000 · 1 Mini = 10,000 · 1 Micro = 1,000</span>
                </div>
              )}
            </CardContent>
            {!tool.comingSoon && tool.link && (
              <CardFooter className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="border-trader-blue text-trader-blue hover:bg-trader-blue hover:text-white px-6 py-2 h-auto rounded-lg inline-flex max-w-full text-center"
                  style={{
                    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                    padding: '0.6rem 1.2rem',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: 'fit-content',
                    borderRadius: '8px',
                  }}
                  onClick={() => window.open(tool.link, "_blank")}
                >
                  {tool.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
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
