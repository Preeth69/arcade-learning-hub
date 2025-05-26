
import { BarChart3, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropFirmComparison = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="bg-trader-blue/10 p-2 rounded-md">
          <BarChart3 className="h-8 w-8 text-trader-blue" />
        </div>
        <h2 className="text-3xl font-bold text-center text-trader-blue">Compare Prop Firms</h2>
      </div>
      
      <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        Looking to get funded by a proprietary trading firm? We've done the research for you.
        Compare rules, fees, drawdowns, profit splits, and more—all in one place using a trusted third-party resource. 
        Make informed decisions and select the prop firm that aligns with your strategy and goals.
      </p>
      
      <div className="flex justify-center">
        <Card className="card-hover max-w-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Prop Firm Comparison Tool</CardTitle>
            <CardDescription className="text-base">
              Comprehensive comparison of proprietary trading firms with detailed analysis of rules, fees, and benefits.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-xs text-gray-500 mb-4">
              <span className="font-medium">Updated regularly to reflect the latest prop firm changes</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              className="bg-trader-blue hover:bg-trader-blue/90 text-white"
              style={{
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                padding: '0.6rem 1.2rem',
                width: 'fit-content',
                maxWidth: '100%',
                borderRadius: '8px',
              }}
              onClick={() => window.open("https://www.propfirmmatch.com", "_blank")}
            >
              Compare Prop Firms
              <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default PropFirmComparison;
