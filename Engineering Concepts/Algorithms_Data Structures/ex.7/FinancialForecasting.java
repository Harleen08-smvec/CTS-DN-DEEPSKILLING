//Recurssion is  a technique where a method calls itself
public class FinancialForecasting {

    public static double forecast(double value, double growthRate, int years) {

        if (years == 0) {
            return value;
        }

        return forecast(value, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                forecast(presentValue, growthRate, years);

        System.out.println("Future Value = " + futureValue);
    }
}
//Time Complexity = O(n)
//Space Complexity = O(n)
