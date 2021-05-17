import { ESCPOSImage } from './ESCPOSImage';

/**
 * ESCPOS printer
 */
class COMMANDS {
   static TXT_ALIGN_LT= [0x1b, 0x61, 0x00];     // Left justification
   static TXT_ALIGN_CT= [0x1b, 0x61, 0x01];     // Centering
   static TXT_ALIGN_RT= [0x1b, 0x61, 0x02];     // Right justification

   static S_RASTER_N= [0x1d, 0x76, 0x30, 0x00]; // Set raster image normal size

   static CTL_LF= [0x0a]; // Print and line feed
   static CTL_CR= [0x0d]; // Carriage return
}
export class ESCPOSPrinter {
    // COMMANDS = {
    //      TXT_ALIGN_LT: [0x1b, 0x61, 0x00];     // Left justification
    //      TXT_ALIGN_CT: [0x1b, 0x61, 0x01];     // Centering
    //      TXT_ALIGN_RT: [0x1b, 0x61, 0x02];     // Right justification
     
    //      S_RASTER_N: [0x1d, 0x76, 0x30, 0x00]; // Set raster image normal size
     
    //      CTL_LF: [0x0a]; // Print and line feed
    //      CTL_CR: [0x0d]; // Carriage return
    //  }
    // Buffer
    private buffer: Buffer;

    /**
     * Constructor
     * @param buffer 
     */
    constructor(buffer: Buffer) {
        // Init buffer
        this.buffer = buffer;
    }

    /**
     * Write buffer
     * @param buffer 
     */
    private write(buffer: Buffer) {
        this.buffer = Buffer.concat([this.buffer, buffer]);
    }

    /**
     * Print raster
     * @param image 
     * @param mode 
     */
    public raster(image: ESCPOSImage, mode: string = 'normal') {
        // Get header
        let header = COMMANDS.S_RASTER_N;

        // Get raster
        let raster = image.toRaster();

        // Set alignment
         this.align('left');

        // Write header
        this.write(new Buffer(header));
        this.write(new Buffer([raster.width, 0]));
        this.write(new Buffer([raster.height, 0]));
        // Write data
        this.write(new Buffer(raster.data));
    }

    /**
     * Print line
     */
    public printLn() {
        this.write(new Buffer([COMMANDS.CTL_CR, COMMANDS.CTL_LF]));
    }

    /**
     * Align 
     * @param alignment ['left', 'center', 'right'] 
     */
    public align(alignment: string = 'left') {
        // Create alignment dictionary
        const aligments = {
            left: COMMANDS.TXT_ALIGN_LT,
            center: COMMANDS.TXT_ALIGN_CT,
            right: COMMANDS.TXT_ALIGN_RT
        }
        
        this.write(new Buffer(aligments[alignment]));
    }

    /**
     * Get buffer
     */
    public getBuffer(): Buffer {
        return this.buffer;
    }
}