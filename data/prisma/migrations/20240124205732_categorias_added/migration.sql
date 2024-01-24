/*
  Warnings:

  - Added the required column `marcacaoId` to the `Manutencao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `Marcacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manutencao" ADD COLUMN     "marcacaoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Marcacao" ADD COLUMN     "categoriaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Manutencao" ADD CONSTRAINT "Manutencao_marcacaoId_fkey" FOREIGN KEY ("marcacaoId") REFERENCES "Marcacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Marcacao" ADD CONSTRAINT "Marcacao_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
