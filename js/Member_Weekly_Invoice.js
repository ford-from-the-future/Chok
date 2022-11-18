var Member_Weekly_Invoice = {};

Member_Weekly_Invoice.call = () => {
    bootbox.prompt({
        size: "large",
        title: "PLEASE ENTER THE NAME OF THE MEMBER ACCOUNT",
        onEscape: true,
        backdrop: true,
        callback: function (result) {
            if (result === Member.name() ) {
                //------------------------------------------------------------------

                function generateHeader(doc) {
                    doc.image('logo.png', 50, 45, { width: 50 })
                        .fillColor('#444444')
                        .fontSize(20)
                        .text('ACME Inc.', 110, 57)
                        .fontSize(10)
                        .text('123 Main Street', 200, 65, { align: 'right' })
                        .text('New York, NY, 10025', 200, 80, { align: 'right' })
                        .moveDown();
                }

                function generateFooter(doc) {
                    doc.fontSize(
                        10,
                    ).text(
                        'Payment is due within 15 days. Thank you for your business.',
                        50,
                        780,
                        { align: 'center', width: 500 },
                    );
                }

                function createInvoice(invoice, path) {
                    import PDFDocument from "pdfkit";
                    let doc = new PDFDocument({ margin: 50 });

                    generateHeader(doc); // Invoke `generateHeader` function.
                    generateFooter(doc); // Invoke `generateFooter` function.

                    import * as fs from "fs";
                    doc.end();
                    doc.pipe(fs.createWriteStream(path));
                }

                module.exports = {
                    createInvoice,
                };
                //--------------------------------------------------------
            }
        }

    });
}