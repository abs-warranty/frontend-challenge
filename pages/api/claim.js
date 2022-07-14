// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const claim = {
    timestamp: +new Date(),
    callerName: 'John Doe',
    callerPhone: '+13035551234',
    registration: {
      customer: {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '+17205551120',
        address: {
          city: 'Coppell',
          line1: '2312',
          line2: 'Suite 300',
          state: 'TN',
          zip: '80903',
        },
      },
      enrollDate: new Date('2022-02-12'),
      invoiceNumber: 'ABC123',
      isTrailer: false,
      originalShop: {
        name: "Example's Tire World",
        phone: "+13035554321",
        address: {
          city: 'Cañon City',
          line1: '3033 East Main Street',
          state: 'CO',
          zip: '81212'
        }
      },
      tires: [
        {
          index: 0,
          dot: '1234',
          make: 'VENOMPOWER',
          model: 'TRAIL HUNTER R/T',
          originalTreadDepth: 17.26,
          partNumber: 'CVPTHRT10',
          remainingTreadDepth: 12,
          retailPrice: 109.99,
          size: '33X12.50R20 LT',
        },
        {
          index: 0,
          dot: '1234',
          make: 'VENOMPOWER',
          model: 'TRAIL HUNTER R/T',
          originalTreadDepth: 17.26,
          partNumber: 'CVPTHRT10',
          remainingTreadDepth: 11,
          retailPrice: 109.99,
          size: '33X12.50R20 LT',
        },
      ],
      files: [
        {
          filename: 'original-invoice/invoice-scan.1654115483542.jpg',
          contentType: 'image/jpeg',
          size: 159031,
        },
        {
          filename: 'service-invoice/invoice-scan.1654115483542.jpg',
          contentType: 'image/jpeg',
          size: 56843,
        },
      ]
    }
  }

  if (claim.timestamp % 1000 > 500) {
    res.status(500).send()
  } else {
    res.status(200).json(claim)
  }

}
