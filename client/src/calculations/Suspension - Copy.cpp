#include "Suspension.h"
#include "Patient.h"
#include<iostream>
#include<iomanip>
#include "Doctor.h"

Suspension::Suspension(string n, float a, float b, float c, float d, int e)
{
    name = n;
    conc = a;
    dose = b;
    doseLow = c;
    doseHi = d;
    box = e;
}

void Suspension::calc(Patient p)
{
    float kg = p.w/(float)2.2;
    float ml, mlLow, mlHi;


    ml = dose * kg / conc;
    mlLow = doseLow * kg / conc;
    mlHi = doseHi * kg / conc;

    if (box == 1)
    {
        if (dose != 0)
        {
            cout<<name<<" "<<conc<<" mg/mL at "<<dose<<" mg/kg"<<endl;
            cout<<"Dose: "<<ml<<"ml."<<endl;

            for (int i = 0; i < size; i++)
            {
                cout<<mls[i]<<" mL: "<<(int)(mls[i]/ml/q[0])<<" days"<<endl;
            }

        }

        if (dose == 0)
        {
            cout<<name<<" "<<conc<<" mg/mL"<<endl;
            cout<<"Dose: "<<mlLow<<"ml at "<<doseLow<<" mg/kg to "<<mlHi<<"ml at "<<doseHi<<" mg/kg:"<<endl;

            for (int i = 0; i < size; i++)
            {
                cout<<mls[i]<<" mL: "<<(int)(mls[i]/mlHi/q[0])<<" to "<<(int)(mls[i]/mlLow/q[0])<<" days"<<endl;
            }
        }

        cout<<endl;
   }

     if (box == 0)
    {
        if(dose != 0)
        {
            cout<<name<<" "<<conc<<" mg/mL"<<endl;
            cout<<"Dose: "<<ml<<"ml at "<<dose<<" mg/kg"<<endl;

            for (int i = 0; i < qSize; i++)
            {
                cout<<q[i]<<" time(s) a day"<<endl;
                cout<<setw(10)<<"Days:"<<'\t'<<"5"<<'\t'<<"7"<<'\t'<<"10"<<'\t'<<"14"<<'\t'<<"21"<<'\t'<<"30"<<endl;
                cout<<setw(10)<<"Total mL:"<<'\t'<<ml*q[i]*5<<'\t'<<ml*q[i]*7<<'\t'<<ml*q[i]*10<<'\t'<<ml*q[i]*14<<'\t'<<ml*q[i]*21<<'\t'<<ml*q[i]*30<<endl;
            }
        }

        if (dose == 0)
        {
            cout<<name<<" "<<conc<<" mg/mL"<<endl;
            cout<<"Dose: "<<mlLow<<"ml at "<<doseLow<<" mg/kg to "<<mlHi<<"ml at "<<doseHi<<" mg/kg:"<<endl;

            for (int i = 0; i < qSize; i++)
            {
                cout<<q[i]<<" time(s) a day"<<endl;
                cout<<setw(10)<<"Days:"<<'\t'<<"5"<<'\t'<<"7"<<'\t'<<"10"<<'\t'<<"14"<<'\t'<<"21"<<'\t'<<"30"<<endl;
                cout<<setw(10)<<"Total mL low:"<<'\t'<<mlLow*q[i]*5<<'\t'<<mlLow*q[i]*7<<'\t'<<mlLow*q[i]*10<<'\t'<<mlLow*q[i]*14<<'\t'<<mlLow*q[i]*21<<'\t'<<mlLow*q[i]*30<<endl;
                cout<<setw(10)<<"Total mL high:"<<'\t'<<mlHi*q[i]*5<<'\t'<<mlHi*q[i]*7<<'\t'<<mlHi*q[i]*10<<'\t'<<mlHi*q[i]*14<<'\t'<<mlHi*q[i]*21<<'\t'<<mlHi*q[i]*30<<endl;
            }
        }

        cout<<endl;
    }


}

Suspension::~Suspension()
{
    //dtor
}
